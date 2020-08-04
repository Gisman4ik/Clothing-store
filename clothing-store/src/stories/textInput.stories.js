import React from 'react';
import { TextInput } from '../components/TextInput/TextInput';

export default { title: 'TextInput' };
export const myTextInput1 = () => <TextInput size='small'>Ваше имя</TextInput>;
export const myTextInput2 = () => <TextInput size='medium'>Ваш email</TextInput>;
export const myTextInput3 = () => <TextInput size='large'></TextInput>;