import { Switch, Route } from 'react-router-dom';
import ChoixPains from './ChoixPains';
import ChoixViandes from './ChoixViandes';
import ChoixGarnitures from './ChoixGarnitures';
import ChoixSauces from './ChoixSauces';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Toggle from '../components/themes/Toggler';
import Panier from '../components/panier/Panier';

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
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default AppStructure;
