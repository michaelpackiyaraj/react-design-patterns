import React, { Component } from 'react';
import logo from './logo.svg';
import FunctionalComponent from './components/header';
import StatelessComponent from './components/text';
import Pure from './components/pure';
import ArticleContainer from './components/articleContainer';
import RenderCallback from './components/renderCallback';
import { Footer } from './components/footer';
import ErrorBoundary from './components/errorBoundary/error';
import ControlledNameForm from './components/controlled';
import UncontrolledNameForm from './components/uncontrolled';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <FunctionalComponent logo={logo} title='React Design Patterns - SOW' />
          <StatelessComponent className='app-intro' info='I am stateless component' />
          <Pure />
          <RenderCallback>
            {() => (
              <ArticleContainer />
            )}
          </RenderCallback>
        </div>
        <ErrorBoundary>
          <ControlledNameForm/>
          <UncontrolledNameForm/>
          <Footer year={2018} company='React Training - SOW ' trainer='Michael Packiyaraj' />
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

export default App;
