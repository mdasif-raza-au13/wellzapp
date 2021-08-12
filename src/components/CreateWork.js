import React, { useState, useContext } from 'react';
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import AddExercise from './AddExercise';
import Button from '@material-ui/core/Button';
import { WorkoutsContext } from '../context/InputContext';

const CreateWork = () => {

    const { inputWork, setInputWork } = useContext(WorkoutsContext);
    const [index, setIndex] = useState(0);

    const handleAddClick = () => {
        setInputWork([...inputWork, { work: "" }]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const list = [...inputWork];
        list[index][name] = value;
        setInputWork(list);
        setIndex(index + 1)
    };
    console.log("work", inputWork)

    return (
        <>
            <div style={{ backgroundColor: "#f3f1f0" }}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <h1>Create Workouts</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <h3>Add Exercises</h3>
                        </Grid>
                        <Grid item xs={12}>
                            <select name="work" style={{ width: "100%", height: "2rem", borderRadius: ".5rem", outline: "0" }} onChange={(e) => handleInputChange(e)} p={2}>
                                <option value="fly">fly</option>
                                <option value="curl">curl</option>
                                <option value="press">press</option>
                                <option value="squat">squat</option>
                            </select>
                        </Grid>
                        <Grid item xs={12} mt={4}>
                            <select style={{ width: "100%", height: "2rem", borderRadius: ".5rem", outline: "0" }} p={2}>
                                <option value="fly">fly</option>
                                <option value="curl">curl</option>
                                <option value="press">press</option>
                                <option value="squat">squat</option>
                            </select>
                        </Grid>
                        {inputWork.map((ele, index) => {
                            return (<>
                            {console.log("ele",ele.work)}
                                <AddExercise work={ele.work} />
                                <Grid item xs={12}
                                    container
                                    direction="row-reverse"
                                    justifyContent="flex-start"
                                    alignItems="center">
                                    {inputWork.length - 1 === index && <Button variant="contained" style={{ backgroundColor: "#ffc400" }} onClick={handleAddClick}>Add Excersie</Button>}
                                </Grid>
                                <br />
                            </>
                            )
                        })}
                    </Grid>
                </Container>
            </div>
        </>
    )
}
export default CreateWork


