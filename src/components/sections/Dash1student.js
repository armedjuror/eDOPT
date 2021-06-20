import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import { Link } from 'react-router-dom';
import './style.css'
import FooterSocial from '../layout/partials/FooterSocial';
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  alignTop,
  invertMobile,
  invertDesktop,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: '',
    paragraph: ''
  };

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          <div className={splitClasses}>
          <div className="split-item">
          {/* <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" >
                <p className="m-0">
                  <div className="row">
                      <div className="column">
                        <a href="#" style={{textDecoration:"none", color:"black", marginRight:"3%"}}>eDOPTED</a>  2
                      </div>
                      <div className="column">
                      <Link to="/Dashboard2_Donor" className="button button-primary button-wide-mobile button-sm" onClick="" style={{backgroundColor:"#3d946e"}}>Button</Link>
                      </div>
                  </div>
                  <br/>
                  <div style={{marginBottom:"2%"}}>
                      1. xxxxxxxxxxxxxxxxxx
                  </div>
                  <div>
                      2. xxxxxxxxxxxxxxxxxx
                  </div>
                  <br/>
                  <a href="#" style={{color:"#3d946e", fontSize:"14px"}}>Adopt More</a>
                </p>
              </div>
              <div className='split-item-image center-content-mobile reveal-from-bottom' data-reveal-container=".split-item" style={{paddingLeft:"2%"}}>
                <p className="m-0">
                    <div className="row">
                      <div className="column">
                      &#169; Ace<br/>
                        435353456 <a href="#" style={{color:"#3d946e", fontSize:"12px", marginLeft:"5px"}}>T&C</a>
                      </div>
                      <div className="column">
                      <Link to="#" className="button button-primary button-wide-mobile button-sm" onClick="" style={{backgroundColor:"#3d946e"}}>Gain More</Link>
                      </div>
                    </div>
                    <br/>
                    <div style={{marginBottom:"0.5%"}}>
                        Show Your Karma
                    </div>
                    <div style={{fontSize:"14px"}}>
                        Share On
                    </div>
                    <FooterSocial/>
                </p>
              </div> */}
          </div>
          </div>


          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom" style={{backgroundColor:"#ffffff", borderRadius:"0", margin:"1%"}}>
              <div className="tiles-item-inner" style={{backgroundColor:"white", borderRadius:"0", border:"1px solid #3d946e"}}>
                <div>
                <center>
                <img src="https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png" alt="" style={{width:"2rem", textAlign:"center"}}/>
                </center>
                <h2 style={{margin:"0", color:"black", fontSize:"25px", textAlign:"center"}}>Name</h2>
                <br/>
                <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"16px"}}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                </p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;