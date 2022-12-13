// import { commands } from './utils/commands';
import React,{Component} from 'react';

class SetUp extends Component{
    render() {
        return (
          <section id="about">
          <div className="container mx-auto flex px-10 py-3 md:flex-row flex-col items-center bg-white 500">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                Model N India  - N-Ovation
                <br className="hidden lg:inline-block" /> Finding it hard to setup the product suite environment set up ? 
              </h1>
              <p className="mb-8 leading-relaxed">
                Follow the below steps and make everything simplier. Less time to setup environment implies more time to work on tasks and be more creative.
              </p>
                          </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            
            </div>
          </div>
        </section>
        );
}
}
export default SetUp;