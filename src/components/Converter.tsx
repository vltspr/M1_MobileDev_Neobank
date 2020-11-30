import React from 'react';
import { Text } from 'react-native';

type PropsType = {
    somme: number,
    newUnit: number,
    unitName: string
}

const Converter: React.FC<PropsType> = ({ somme, newUnit, unitName }) => {
    const newSomme = somme * newUnit
    return <Text>Vos {somme}€ valent {newSomme} {unitName}</Text>
}

export default Converter
