'use client';

import FooterList, { FooterLi } from "@/component/MainFooter/list";
import TitleSection from "@/component/ui/title_section";
import { FilterIcon } from "@/component/MainNavBar/main-nav-icon";
import classes from './productFilter.module.css';
import { useState } from 'react';

export default function ProductCategory() {
    const [viewFilter,setViewFilter] = useState(false);
    
    function handlerToggel() {
        setViewFilter((prev) => !prev);
    }
    return(
        <>
            <div className={classes.filter}>
                <h1>Filter <FilterIcon classN="filter" handlerToggel={handlerToggel}/></h1>
            </div>
            <div className={`${viewFilter ? classes.active : classes.all}`}>
                <div className={classes.category}>
                    <TitleSection>Category</TitleSection>
                    <main>
                        <FooterList title='electronics'>
                            <FooterLi>
                                    <input type="checkbox" id="labtop" />
                                    <label htmlFor="labtop">Labtop</label>
                            </FooterLi>
                            <FooterLi>
                                    <input type="checkbox" id="SmartPhons" />
                                    <label htmlFor="SmartPhons">Smartphones</label>
                            </FooterLi>
                            <FooterLi>
                                    <input type="checkbox" id="tablet" />
                                    <label htmlFor="tablet">Tablet</label>
                            </FooterLi>
                        </FooterList>
                        <FooterList title='Home'>
                            <FooterLi>
                                    <input type="checkbox" id="Kitchen"/>
                                    <label htmlFor="Kitchen">Kitchen Accessories</label>
                            </FooterLi>
                            <FooterLi>
                                    <input type="checkbox" id="furniture" />
                                    <label htmlFor="furniture">Furniture</label>
                            </FooterLi>
                            <FooterLi>
                                    <input type="checkbox" id="HomeDecoraction" />
                                    <label htmlFor="HomeDecoraction">Home Decoration</label>
                            </FooterLi>
                        </FooterList>
                        <FooterList title='Men'>
                            <FooterLi>
                                    <input type="checkbox" id="menShose" />
                                    <label htmlFor="menShose">Mens Shoes</label>
                            </FooterLi>
                            <FooterLi>
                                    <input type="checkbox" id="mensShirts" />
                                    <label htmlFor="mensShirts">Mens Shirts</label>
                            </FooterLi>
                            <FooterLi>
                                    <input type="checkbox" id="mensWatches" />
                                    <label htmlFor="mensWatches">Mens Watches</label>
                            </FooterLi>
                            <FooterLi>
                                    <input type="checkbox" id="sportsAccessories" />
                                    <label htmlFor="sportsAccessories">Sports Accessories</label>
                            </FooterLi>
                        </FooterList>
                        <FooterList title='Girl'>
                            <FooterLi>
                                    <input type="checkbox" id="beauty" />
                                    <label htmlFor="beauty">Beauty</label>
                            </FooterLi>
                            <FooterLi>
                                    <input type="checkbox" id="dresses" />
                                    <label htmlFor="dresses">Womens Dresses</label>
                            </FooterLi>
                            <FooterLi>
                                    <input type="checkbox" id="jewellery" />
                                    <label htmlFor="jewellery">Womens Jewellery</label>
                            </FooterLi>
                            <FooterLi>
                                    <input type="checkbox" id="womensShoes" />
                                    <label htmlFor="womensShoes">Womens Shoes</label>
                            </FooterLi>
                        </FooterList>
                    </main>
                </div>
            </div>
        </>
    )
}