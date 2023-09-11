import React, { useContext } from 'react'
import { GlobalContext } from "../GlobalContext";
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Filter() {
    const data = useContext(GlobalContext);
    const [categories] = data.categoryApi.categories

    const [category, setCategory] = data.productApi.category
    const [sort, setSort] = data.productApi.sort
    const [search, setSearch] = data.productApi.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }
    return (
        <Grid container sx={{ mt: 4 }}>
            <Grid item sm={4} xs={10} sx={{ position: 'relative', display: { xs: "block", sm: "none" } }}>
                <SearchIcon sx={{ position: "absolute", top: "22%", left: '2%' }} />
                <input type="text" value={search} placeholder="Search here!"
                    onChange={e => setSearch(e.target.value.toLowerCase())} style={{ padding: '10px 10px 10px 35px', borderRadius: '20px', width: '100%' }} />
            </Grid>

            {/* //Category Selection// */}


            <Grid item sm={4} xs={6} sx={{ mt: { xs: 3, sm: 0 } , paddingRight: { xs: 0.25, sm: 0 }, display: {xs: "none", sm: "block"} }}>
                <select name="category" style={{ padding: '10px', width: '50%', background: `linear-gradient(to right, #f12711, #f5af19)`, color: '#fff', border: 'none' }} value={category} onChange={handleCategory} >
                    <option value='' style={{ color: '#000' }}>Shop by Category</option>
                    {

                        categories.map(category => (
                            <option style={{ color: "#000" }} value={"category=" + category.title} key={category._id}>
                                {category.title}
                            </option>

                        ))
                    }
                </select>
            </Grid>

            {/* //Category Selection-Mobile View// */}

            <Grid item sm={4} xs={6} sx={{ mt: { xs: 3, sm: 0 }, width: { xs: "100%", sm: "50%", lg: "50%" }, paddingRight: { xs: 0.25, sm: 0 }, display: {xs: "block", sm: "none"} }}>
                <select name="category" style={{ padding: '10px', width: '100%', background: `linear-gradient(to right, #f12711, #f5af19)`, color: '#fff', border: 'none' }} value={category} onChange={handleCategory} >
                    <option value='' style={{ color: '#000' }}>Shop by Category</option>
                    {

                        categories.map(category => (
                            <option style={{ color: "#000" }} value={"category=" + category.title} key={category._id}>
                                {category.title}
                            </option>

                        ))
                    }
                </select>
            </Grid>

            {/* //Price Selection// */}

            <Grid item sm={4} xs={6} align="end" sx={{ display: { sm: "none", xs: 'block' }, mt: { xs: 3, sm: 0 }, paddingLeft: { xs: 0.25, sm: 0 } }}>
                <select value={sort} onChange={e => setSort(e.target.value)} style={{ padding: '10px', width: '100%', background: `linear-gradient(to right, #f12711, #f5af19)`, color: '#fff', border: 'none' }}>
                    <option value='' style={{ color: '#000' }}>Sort by Price</option>
                    {/* <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-sold'>Best sales</option> */}
                    <option value='sort=-price' style={{ color: '#000' }}>Hight-Low</option>
                    <option value='sort=price' style={{ color: '#000' }}>Low-Hight</option>
                </select>
            </Grid>

            <Grid item sm={4} sx={{ position: 'relative', display: { xs: "none", sm: "block" } }}>
                <SearchIcon sx={{ position: "absolute", top: "22%", left: '2%' }} />
                <input type="text" value={search} placeholder="Search here!"
                    onChange={e => setSearch(e.target.value.toLowerCase())} style={{ padding: '10px 10px 10px 35px', borderRadius: '20px', width: '100%' }} />
            </Grid>

            <Grid item sm={4} xs={12} align="end" sx={{ display: { sm: "block", xs: 'none' } }}>
                <select value={sort} onChange={e => setSort(e.target.value)} style={{ padding: '10px', width: '50%', background: `linear-gradient(to right, #f12711, #f5af19)`, color: '#fff', border: 'none' }}>
                    <option value='' style={{ color: '#000' }}>Sort by Price</option>
                    {/* <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-sold'>Best sales</option> */}
                    <option value='sort=-price' style={{ color: '#000' }}>Hight-Low</option>
                    <option value='sort=price' style={{ color: '#000' }}>Low-Hight</option>
                </select>
            </Grid>
        </Grid>
    )
}

export default Filter