import React, { useState, useContext, useEffect } from 'react';
import { Grid } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import AddSets from './AddSets';
import Card from '@material-ui/core/Card';
import { SetsContext } from '../context/InputContext';

const AddExercise = ({work}) => {

    const [toggle, setToggle] = useState(false);
    const [reps, setReps] = useState();
    const [weight, setWeight] = useState();
    const [rest, setRest] = useState();
    const { inputList, setInputList } = useContext(SetsContext);
    
    useEffect(() => {
        setReps(inputList.map((element) => {return(<td>{element.reps}-</td>)}))
        setWeight(inputList.map((element) => {return(<td>{element.weight}-</td>)}))
        setRest(inputList.map((element) => {return(<td>{element.rest}-</td>)}))
    },[inputList])

    return (
        <>
            <Grid item xs={12}>
                <Grid>
                    <Card >
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "1rem" }} >
                            <img src="https://picsum.photos/300/200" alt="pic" />
                            <div>
                                <h4 style={{ display: "inline", padding: "0", margin: "0 0 0 2rem" }}>{work}</h4>
                                <div style={{ display:"flex", justifyContent:"center", alignItems:"center", margin: "2rem" }} >
                                    <table>
                                        <tr>
                                            <td>reps</td>
                                            {reps}
                                        </tr>
                                        <tr>
                                            <td>weight</td>
                                            {weight}
                                        </tr>
                                        <tr>
                                            <td>rest</td>
                                            {rest}
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <span onClick={() => setToggle(!toggle)} style={{cursor:"pointer"}}>Edit</span>&nbsp;
                                <CloseIcon style={{cursor:"pointer"}} />
                            </div>
                        </div>
                    </Card>
                </Grid>
            </Grid><br />
            {toggle ? <AddSets /> : null}
        </>
    )
}

export default AddExercise
