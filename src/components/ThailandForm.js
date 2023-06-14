import React, { useEffect } from 'react';
import $ from 'jquery';

const ThailandForm = () => {
  useEffect(() => {
    $.Thailand({
      $district: $('#sub_district'),
      $amphoe: $('#district'),
      $province: $('#province'),
      $zipcode: $('#postcode'),
    });
  }, []);

  return (
    <div className="container">
      <h2>thailand.js</h2>
      <div className="form-control">
        <span>ตำบล</span>
        <input id="sub_district" type="text" className="txt" placeholder="ตำบล" />
      </div>
      <div className="form-control">
        <span>อำเภอ</span>
        <input id="district" type="text" className="txt" placeholder="อำเภอ" />
      </div>
      <div className="form-control">
        <span>จังหวัด</span>
        <input id="province" type="text" className="txt" placeholder="จังหวัด" />
      </div>
      <div className="form-control">
        <span>รหัสไปรษณีย์</span>
        <input id="postcode" type="text" className="txt" placeholder="รหัสไปรษณีย์" />
      </div>
    </div>
  );
};

export default ThailandForm;
