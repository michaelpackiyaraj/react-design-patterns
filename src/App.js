import React, { Component } from 'react';
import logo from './logo.svg';
import FunctionalComponent from './components/header';
import StatelessComponent from './components/text';
import Pure from './components/pure';
import ArticleContainer from './components/articleContainer';
import RenderCallback from './components/renderCallback';
import { Footer } from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionalComponent logo={logo} title='React Design Patterns - SOW' />
        <StatelessComponent className='app-intro' info='I am stateless component' />
        <Pure />
        <RenderCallback>
					{() => (
						<ArticleContainer />
					)}
				</RenderCallback>
        <Footer year={2018} company='React Training - SOW ' trainer='Michael Packiyaraj' />
      </div>
    );
  }
}

export default App;
