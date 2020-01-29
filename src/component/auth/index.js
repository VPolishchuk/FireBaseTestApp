import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
/////////////////////////////////////////

const AuthComponent = () => (
    <div>
        auth
    </div>
);

const mapStateToProps = (state) => (createStructuredSelector({
    
}))
  
const mapDispatchToProps = {

}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthComponent)
