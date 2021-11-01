import { Switch, Route } from 'react-router-dom';
import ChoixPains from './ChoixPains';
import ChoixViandes from './ChoixViandes';
import ChoixGarnitures from './ChoixGarnitures';
import ChoixSauces from './ChoixSauces';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Toggle from '../components/themes/Toggler';
import PréparationCommande from './PréparationCommande';
import Panier from '../components/panier/Panier';
import Commande from './Commande';

function AppStructure() {
  return (
    <div>
      <Header></Header>
      <Toggle></Toggle>
      <Panier></Panier>
      <Switch>
        <Route exact path='/' component={ChoixPains} />
        <Route exact path='/choix-pains' component={ChoixPains} />
        <Route exact path='/choix-viandes' component={ChoixViandes} />
        <Route exact path='/choix-garnitures' component={ChoixGarnitures} />
        <Route exact path='/choix-sauces' component={ChoixSauces} />
        <Route exact path='/commande' component={Commande} />
        <Route
          exact
          path='/préparation-commande'
          component={PréparationCommande}
        />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default AppStructure;
