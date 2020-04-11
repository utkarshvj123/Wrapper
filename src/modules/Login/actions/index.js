import { GET_DATA } from "../../Home/actions";
import data from "../../../constants/data.json";
import { filteringString } from "../../../constants/globalFunction";

export const IS_VALID_USER = "IS_VALID_USER";

export function authenticateUserAction(response) {
  return (dispatch) => {
    dispatch({
      type: IS_VALID_USER,
      payload: response,
    });
    if (response === true) {

      //---working
      // console.log(dataFilter(dataname), "..............datankjklajkjlkj");
      // const newthat = dataFilter(dataname);
      // console.log(newthat, "....new that");
      // console.log(anotherFunction(newthat), "....console.log printing");
      // const newVAlidData = filteringMainBlock(data.members);
      // console.log(newVAlidData, "...new valid data");
      dispatch({
        type: GET_DATA,
        payload: data.members,
      });
    }
  };
}

const dataname = [
  { start_time: "Feb 1 2020  1:33PM", end_time: "Feb 1 2020 1:54PM" },
  { start_time: "Mar 1 2020  11:11AM", end_time: "Mar 1 2020 2:00PM" },
  { start_time: "Mar 16 2020  5:33PM", end_time: "Mar 16 2020 8:02PM" },
];

// function dataFilter(array, timeZone) {
//   let c = [];
//   array.forEach((object, index) => {
//     c.push({ data: [object.start_time, object.end_time] });
//   });
//   return anotherFunction(c, timeZone);
// }

// function anotherFunction(array, timeZone) {
//   let d = [];
//   array.forEach((object) => {
//     const newfdr = [];
//     object.data.forEach((obj2) => {
//       let newVArDate1 = "";
//       let newVArDate2 = "";
//       if (obj2.indexOf("PM") > 0) {
//         newVArDate1 = filteringString(obj2, " ", obj2.indexOf("PM"));
//         newfdr.push(newVArDate1);
//       } else {
//         newVArDate2 = filteringString(obj2, " ", obj2.indexOf("AM"));
//         newfdr.push(newVArDate2);
//       }
//       return newfdr;
//     });
//     return d.push({ data: newfdr });
//   });
//   return d;
// }

// function filteringMainBlock(array) {
//   let getdata = [];
//   array.forEach((obj) => {
//     getdata.push({
//       id: obj.id,
//       real_name: obj.real_name,
//       tz: obj.tz,
//       activity_periods: dataFilter(obj.activity_periods, obj.tz),
//     });
//   });
//   return getdata;
// }
