
// http://school.yuysoft.com/indeuapi/webapi/api/ding/ApiCallGrade?school=110

import axios from "axios";


axios.get("http://school.yuysoft.com/indeuapi/webapi/api/ding/ApiCallGrade?school=110")
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    });
