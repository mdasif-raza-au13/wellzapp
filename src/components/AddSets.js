import React, { useContext } from 'react'
import { Grid } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { SetsContext } from '../context/InputContext';

const AddSets = () => {

    const { inputList, setInputList } = useContext(SetsContext);
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, { reps: "", weight: "", rest: "" }]);
    };
    console.log("intp",inputList);
    return (
        <>
            <Grid item xs={12}>
                <Grid>
                    <Card style={{ padding: "1rem" }}>
                        {inputList.map((field, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        <table style={{ padding: "1rem" }}>
                                            <tr>
                                                <th>....</th>
                                                <th>....</th>
                                                <th>reps</th>
                                                <th>weight</th>
                                                <th>rest</th>
                                            </tr>
                                            <tr>
                                                <td>{inputList.length !== 1 && <CloseIcon style={{cursor:"pointer"}} onClick={() => handleRemoveClick(index)} />}</td>
                                                <td>sets</td>
                                                <td><input onChange={(e) => handleInputChange(e, index)} name="reps" value={field.reps} style={{ width: "20%", display: "flex", alignSelf: "center", outline: "0" }} /></td>
                                                <td><input onChange={(e) => handleInputChange(e, index)} name="weight" value={field.weight} style={{ width: "20%", display: "flex", alignSelf: "center", outline: "0" }} /></td>
                                                <td><input onChange={(e) => handleInputChange(e, index)} name="rest" value={field.rest} style={{ width: "20%", display: "flex", alignSelf: "center", outline: "0" }} /></td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        {inputList.length - 1 === index && <Button variant="outlined" onClick={handleAddClick} style={{ borderColor: "#ffc400", color: "#ffc400" }}>Add new sets</Button>}
                                        <br />
                                    </div>
                                </>
                            )
                        })}
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default AddSets
