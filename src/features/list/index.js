import React, {useState} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// selectors
import {
    makeSelectList
} from './selectors';
// actions
import { testActions } from './actions';
/////////////////////////////////////////

const ListComponent = (props) => {
    const [value, setValue] = useState('');
    const onChange = (value) => {
        // props.testActions(value);
        return setValue(value)
    };
    function testFunc() {
        return props.testActions(value)
    }
    return (
    <div style={{color: 'red'}}>
        list:
        {/* <div>
            {props.list.map(
                (item, i) =>(
                    <div>
                        {item}
                    </div>
                )
            )}
        </div> */}
        {console.log('props___', props.list)}
        <input type='text' value={value} onChange={(e) => onChange(e.target.value) } />
        <button
            onClick={testFunc}
        >

            click
        </button>
    </div>
)};

const mapStateToProps = (state) => (createStructuredSelector({
    list: makeSelectList(state)
}))
  
const mapDispatchToProps = {
    testActions,
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListComponent)