import React, { useEffect } from 'react';
import $ from 'jquery';

const ThailandForm = () => {
  useEffect(() => {
    const loadThailandPlugin = async () => {
      // โหลดและใช้งาน JQL
      const JQL = await import('https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/dependencies/JQL.min.js');
      window.JQL = JQL.default;

      // โหลดและใช้งาน typeahead.bundle.js
      const typeaheadBundle = await import('https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/dependencies/typeahead.bundle.js');
      window.Bloodhound = typeaheadBundle.default.Bloodhound;

     

      // ใช้งาน jQuery Thailand plugin
      window.Thailand({
        $district: $('#sub_district'),
        $amphoe: $('#district'),
        $province: $('#province'),
        $zipcode: $('#postcode'),
      });
    };

    loadThailandPlugin();
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
