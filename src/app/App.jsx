import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const header = () => {
  return (
    <div className="content-wrapper">
      <div className="header white-text">
        <span className=""><h1 className="fadeInUp animated">Style Guide - m-site</h1>
        <h4 className="fadeInUp animated">Oxygen Design</h4></span>
      </div>
      <div className="component-block">
        <div className="component-block--items">
          <h1 className="title"><span>Colors Palette</span></h1>
          <h3 className="subtitle">Primary Colors</h3>
          <ul className="card color-palletes">
            <li className="carwale-primary-blue blue-whale"></li>
            <li className="carwale-primary-blue green-vogue"></li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#0B2E40</span>Blue Whale</li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#0E3A50</span>Green Vogue</li>
          </ul>
          <ul className="card color-palletes">
            <li className="carwale-primary-orange hd-orange"></li>
            <li className="carwale-primary-orange orange-red"></li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#BF331C</span>H D Orange</li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#E53012</span>Orange Red</li>
          </ul>
          <h3 className="subtitle">Secondary Colors</h3>
          <ul className="card color-palletes">
            <li className="carwale-secondary-teal shamrock-green"></li>
            <li className="carwale-secondary-teal spring-green"></li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#00AFA0</span>Shamrock Green</li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#23EFAB</span>Spring Green</li>
          </ul>
          <ul className="card color-palletes">
            <li className="carwale-secondary-brown golden-brown"></li>
            <li className="carwale-secondary-brown carrot-orange"></li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#A25A00</span>Golden Brown</li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#EF9423</span>Carrot Orange</li>
          </ul>
          <ul className="card color-palletes">
            <li className="carwale-secondary-orange orange"></li>
            <li className="carwale-secondary-orange cinnabar"></li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#FF653F</span>Orange</li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#23EFAB</span>Cinnabar</li>
          </ul>
          <ul className="card color-palletes">
            <li className="carwale-secondary-blue summer-sky"></li>
            <li className="carwale-secondary-blue lynch"></li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#3FBFFF</span>Summer Sky</li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#E53012</span>Lynch</li>
          </ul>
          <h3 className="subtitle">Text &amp; Body Colors</h3>
          <ul className="card color-palletes">
            <li className="carwale-grey charcoal"></li>
            <li className="carwale-grey dim-gray"></li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#484848</span>Charcoal</li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#6f6f6f</span>Dim Gray</li>
          </ul>
          <ul className="card color-palletes">
            <li className="carwale-grey dark-gray"></li>
            <li className="carwale-grey light-gray"></li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#aaaaaa</span>Dark Gray</li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#d5d5d5</span>Light Gray</li>
          </ul>
          <ul className="card color-palletes">
            <li className="carwale-grey white-smoke"></li>
            <li className="carwale-grey snow"></li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#efefef</span>White Smoke</li>
            <li className="carwale-grey-text text-dark-gray"><span className="color-code-text">#fbfbfb</span>Snow</li>
          </ul>
        </div>
        <div className="component-block--items typeface">
          <h1 className="title"><span>Typeface</span></h1>

          <h3 className="subtitle">Font-Family: Lato</h3>
          <span className="carwale-primary-blue-text text-green-vogue font-variant-title">Styles: </span>
          <ul className="font-variant-list">
            <li className="lato-light">Light</li>
            <li className="lato-light"><em>Light Italic</em></li>
            <li className="lato-regular">Regular</li>
            <li className="lato-regular"><em>Regular Italic</em></li>
            <li className="lato-bold">Bold</li>
            <li className="lato-bold"><em>Bold Italic</em></li>
            <li className="lato-black">Black</li>
            <li className="lato-black"><em>Black Italic</em></li>
          </ul>
          <ul className="font-cards">
            <li className="card lato-light"><span className="big-text">Aa</span><span className="small-text">Lato Light</span></li>
            <li className="card lato-regular"><span className="big-text">Aa</span><span className="small-text">Lato Regular</span></li>
            <li className="card lato-bold"><span className="big-text">Aa</span><span className="small-text">Lato Bold</span></li>
          </ul>

          <h3 className="subtitle">Heading for M-site:</h3>
          <h1>H 1 Maruti Suzuki Dzire 0123456789 <span className="carwale-grey-text text-dark-gray">20px</span></h1>
          <h2>H 2 Maruti Suzuki Dzire 0123456789 <span className="carwale-grey-text text-dark-gray">18px</span></h2>
          <h3>H 3 Maruti Suzuki Dzire 0123456789 <span className="carwale-grey-text text-dark-gray">16px</span></h3>
          <h4>H 4 Maruti Suzuki Dzire 0123456789 <span className="carwale-grey-text text-dark-gray">15px</span></h4>
          <h5>H 5 Maruti Suzuki Dzire 0123456789 <span className="carwale-grey-text text-dark-gray">13px</span></h5>

          <h3 className="subtitle">Paragraph 13px - 14 px, T&amp;C  &amp; Information 12px</h3>
          <p className="p-14 orange-highlighter">Honda has updated their sub-four-metre compact sedan three years after its launch in 2013. This midlife upgrade brings the Honda Amaze at par with its competition. The Amaze is basically a sedan version of the Brio, but looks proportionate, unlike few of its competitors. The important bit is that the Amaze refuses to look boring, whether you like the way it looks or not. The new 
          thick horizontally slatted grille is typical of all new Honda cars.</p>
          <p className="p-13">Honda has updated their sub-four-metre compact sedan three years after its launch in 2013. This midlife upgrade brings the 
          Honda Amaze at par with its competition. The Amaze is basically a sedan version of the Brio, but looks proportionate, unlike few of its competitors. </p>
        </div>

        <div className="component-block--items ui-elements">
          <h1 className="title"><span>UI Elements</span></h1>

          <ul className="ui-elements--items">
            <li><h3 className="subtitle">Primary Button</h3></li>
            <li><button className="cw-btn cw-btn-lg cw-btn-default">Default Button</button></li>
            <li><button className="cw-btn cw-btn-lg cw-btn-default active">Active Button</button></li>
            <li><button className="cw-btn cw-btn-lg cw-btn-default disabled">Disable Button</button></li>
          </ul>

          <ul className="ui-elements--items">
            <li><h3 className="subtitle">Secondary Button</h3></li>
            <li><button className="cw-btn cw-btn-md cw-btn-secondary">Default Button</button></li>
            <li><button className="cw-btn cw-btn-md cw-btn-secondary active">Active Button</button></li>
            <li><button className="cw-btn cw-btn-md cw-btn-secondary disabled">Disable Button</button></li>
          </ul> 

          <ul className="ui-elements--items">
            <li><h3 className="subtitle">Secondary Small Button</h3></li>
            <li><button className="cw-btn cw-btn-sm cw-btn-secondary">Default Button</button></li>
            <li><button className="cw-btn cw-btn-sm cw-btn-secondary active">Active Button</button></li>
            <li><button className="cw-btn cw-btn-sm cw-btn-secondary disabled">Disable Button</button></li>
          </ul> 

          <ul className="ui-elements--items links">
            <li><h3 className="subtitle">Links</h3></li>
            <li><a href="" className="">+ Compare with Dzire</a></li>
            <li><a href="" className="">+ Read More Review </a></li>
            <li><a href="" className="">View Price Breakup</a></li>
            <li><a href="" className=""><small>T &amp; C Apply</small></a></li>
          </ul> 

        </div>

        <div className="component-block--items blue-highlight-section">
            <button className="cw-btn cw-btn-lg cw-btn-default margin-right25">Default Button</button>
            <button className="cw-btn cw-btn-md cw-btn-white margin-right25">Default Button</button>
            <button className="cw-btn cw-btn-sm cw-btn-white margin-right25">Default Button</button>
            <a href="" className="margin-right25">+ Compare with Dzire</a>
        </div>

        <div className="component-block--items ui-elements">
          <p>
            <input type="text" value="" placeholder="Normal Input" className="margin-right25"/>
            <input type="text" value="" placeholder="Normal Input" className="focus margin-right25"/>
            <input type="text" value="" placeholder="Disabled Input" className="margin-right25" disabled="disabled"/>
          </p>
          <p>
            <input type="text" value="" placeholder="Error Input" className="error margin-right25"/>
            <input type="text" value="" placeholder="Success Input" className="success focus margin-right25"/>
          </p>
          <p>
            <textarea className="margin-right25" rows="4" cols="50" name="comment" form="usrform"></textarea>
            <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>
          </p>
          <h3 className="subtitle">Input</h3>
          <p>
            <select className="selectpicker select-teal">
              <option>Mustard</option>
              <option>Ketchup</option>
              <option>Relish</option>
            </select>
            <select className="selectpicker">
              <optgroup label="Picnic">
                <option>Mustard</option>
                <option>Ketchup</option>
              </optgroup>
              <optgroup label="Camping">
                <option>Tent</option>
                <option>Flashlight</option>
              </optgroup>
            </select>

          </p>
          <h3 className="subtitle">Other Buttons</h3>
          <p>
            <button className="cw-btn other-default">Default</button>
             <i className="material-icons">format_align_right</i>
             <i className="material-icons">close</i>
             <i className="material-icons">add</i>
             <i className="material-icons">chevron_left</i>
             <i className="material-icons">chevron_right</i>
          </p>
        </div>

      </div>
    </div>
  )
}

export default header;
