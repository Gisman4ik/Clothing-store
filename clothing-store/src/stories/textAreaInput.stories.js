import React from 'react';
import { TextareaInput } from '../components/TextareaInput/TextareaInput';

export default { title: 'TextareaInput' };
export const myTextareaInput1 = () => <TextareaInput size='small'>Оставьте свой комментарий</TextareaInput>;
export const myTextareaInput2 = () => <TextareaInput size='medium'>Оставьте свой комментарий</TextareaInput>;
export const myTextareaInput3 = () => <TextareaInput size='large'>Не забудьте указать город</TextareaInput>;