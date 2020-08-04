import React from 'react';
import { Button } from '../components/Button/Button';

export default { title: 'Button' };
export const addCartBtnb1 = () => <Button color='blue' size = 'mobile-addcart-b' rightIcon = 'CART_ICON'>Добавить в корзину</Button>;
export const addCartBtnb2 = () => <Button color = 'blue' size = 'tablet-addcart-b' rightIcon = 'CART_ICON'>Добавить в корзину</Button>;
export const addCartBtnb3 = () => <Button color='blue' size = 'desktop-addcart-b' rightIcon = 'CART_ICON'>Добавить в корзину</Button>;
export const addCartBtnw1 = () => <Button color = 'white' size = 'mobile-addcart-w' rightIcon = 'CART_ICON'>Добавить в корзину</Button>;
export const addCartBtnw2 = () => <Button color = 'white' size = 'tablet-addcart-w' rightIcon = 'CART_ICON'>Добавить в корзину</Button>;
export const addCartBtnw3= () => <Button color = 'white' size = 'desktop-addcart-w' rightIcon = 'CART_ICON'>Добавить в корзину</Button>;
export const reviewBtn1 = () => <Button color = 'blue' size = 'desktop_review' rightIcon = 'REVIEW_ICON'>Оставьте свой отзыв</Button>;
export const reviewBtn2 = () => <Button color = 'blue' size = 'mobile_review' rightIcon = 'REVIEW_ICON'>Оставьте свой отзыв</Button>;
export const filterBtn1 = () => <Button color = 'dirty-white' size = 'tablet_filter' leftIcon = 'FILTER_ICON'>Фильтр и сортировка</Button>;
export const filterBtn2 = () => <Button color = 'dirty-white' size = 'small' rightIcon = 'FILTER_ICON'></Button>;
export const filterBtn3 = () => <Button color = 'dirty-white' size = '' rightIcon = 'SELECT_ARROW'>По популярности</Button>;
export const filterBtn4 = () => <Button color = 'dirty-white' size = '' rightIcon = 'SELECT_ARROW'>Наличие</Button>;
export const filterBtn5 = () => <Button color = 'dirty-white' size = '' rightIcon = 'SELECT_ARROW'>Размер</Button>;
export const filterBtn6 = () => <Button color = 'dirty-white' size = '' rightIcon = 'SELECT_ARROW'>Цена</Button>;
export const favorite = () => <Button color = 'white' size = 'small' rightIcon = 'FAVORITE_ICON'></Button>;