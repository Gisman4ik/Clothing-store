import React from 'react';
import { SearchInput } from '../components/SearchInput/SearchInput';

export default { title: 'SearchInput' };

export const mySearchInput1 = () => <SearchInput size='small'>Поиск товаров</SearchInput>;
export const mySearchInput2 = () => <SearchInput size='medium'>Поиск товаров</SearchInput>;
export const mySearchInput3 = () => <SearchInput size='large'>Поиск товаров</SearchInput>;