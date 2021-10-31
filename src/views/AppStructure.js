import { Switch, Route } from 'react-router-dom';
import ChoixPains from './ChoixPains';
import ChoixViandes from './ChoixViandes';
import ChoixGarnitures from './ChoixGarnitures';
import ChoixSauces from './ChoixSauces';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function AppStructure() {
  return (
    <div>
      <Header></Header>
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
