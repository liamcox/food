import axios from "axios"

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 
        'Bearer s0dyEHuAJ-dsBmkWOltUPdu_LUT2Onj585mumfOHid4ROpw4_lBNAWYvyYeXK-wO31I6aWtX6rbOOcU2o4RXaJinjSXq_6CaeS0MD7hY7ABd0W0xwcosy_evd9qeX3Yx' 
    }
})