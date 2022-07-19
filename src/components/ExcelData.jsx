// let datasheet;
//   export default RedaFile = ({}) => {
//     datasheet = [];
//     var f = file;
//     const reader = new FileReader();
//     reader.onload = async (evt) => {
//       /* Parse data */
//       const bstr = evt.target.result;
//       const wb = XLSX.read(bstr, { type: "binary" });
//       console.log("Sheet Names >>> " + wb.SheetNames.length);

//       wb.SheetNames.forEach(async (name) => {
//         console.log(name);
//         const ws = wb.Sheets[name];
//         /* Convert array of arrays */
//         //  setdata(XLSX.utils.sheet_to_json(ws));
//         await console.log(
//           "Data>>>" + JSON.stringify(XLSX.utils.sheet_to_json(ws))
//         );
//         // shows that excel data is read
//         datasheet.push(XLSX.utils.sheet_to_json(ws));
//         console.log(datasheet);
//         datasheet[0].map((v, index) => {
//           console.log(v);
//           let Newfromdata = {
//             No_of_farmers: v["No. of farmers"],
//             Total_area_Ha: v["Total area (Ha)"],
//             Crop_n_Variety: v["Crop & Variety"],
//             Crop_type_Main_or_Intercrop: v[`"Crop type ↵(Main/ ↵Intercrop)"`],
//             Crop_Area_Ha: v["Crop Area (Ha)"],
//             No_of_trees_plants: v['"No. of trees/ ↵plants"'],
//             Sowing_time_mmyy: v["Sowing time (mm/yy)"],
//             Harvest_time_mmyy: v["Harvest time (mm/yy)"],
//             Actual_yield_of_last_year_MT: v["Actual yield of last year (MT)"],
//             Quantity_sold_of_last_year_MT: v["Quantity sold of last year (MT)"],
//             Estimated_yield_for_current_year_MT:
//               v["Estimated yield for current year (MT)"],
//             On_farm_processed_product: v["On farm processed product"],
//             Loss_in_percent: v["Loss in %"],
//             Field_status: v["Field status(IC1/IC2/IC3/C)"],
//             Product_status: v["Product status (IC/C)"],
//           };
//           let temparryforempty = { ...tableDetails };
//           settableDetails({ ...Newfromdata });
//           setData((oldform) => [...oldform, Newfromdata]);
//           settableDetails({ ...temparryforempty });
//         });
//       });
//     };
//     reader.readAsBinaryString(f);
//   };
