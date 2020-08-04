import React from 'react';
import cart_icon from '../../assets/icons/cart-icon.svg';
import search_icon from '../../assets/icons/search-icon.svg';
import select_arrow from '../../assets/icons/select-arrow.svg';
import review_icon from '../../assets/icons/review-icon.svg';
import filter_icon from '../../assets/icons/filter-icon.svg';
import favorite_icon from '../../assets/icons/favorite-icon.svg';

const iconSrc = {
    CART_ICON: cart_icon,
    SEARCH_ICON: search_icon,
    SELECT_ARROW: select_arrow,
    REVIEW_ICON: review_icon,
    FILTER_ICON: filter_icon,
    FAVORITE_ICON: favorite_icon,
}

export function Icon ({src}) {
    return (
        <img src={iconSrc[src]}/>
    )
}