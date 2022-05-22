import {useState, useEffect} from 'react';
import { Dimensions, ScrollView } from 'react-native';
import Item from './Item';
import {searchMeals} from '../../../services/MealsServices';

const {width , height} = Dimensions.get('window')

export default function List() {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        searchMeals({}).then(res => {
            setMeals(res.data);
        })
    }, [])
    
    return (
        <ScrollView style={{flex: 1,maxHeight : height - 327, marginTop: 15 }}>
                {meals.map((meal, index) =>(
                    <Item meal={meal} key={index} index={index} length={meals.length} />
                ))}
        </ScrollView> 
    );

}