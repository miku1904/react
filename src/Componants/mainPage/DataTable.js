import React from 'react'

const DataTable = () => {
  return (
        <div className="container mt-5  ">
        <div className="text-center">
            <h1><span>My Photo</span>Request</h1>
        </div>
        <div className="row">
            <div className="myrequest-table" >
                <table className="table ">
                    <thead>
                        <tr>
                            <th className="name">Request</th>
                            <th className="add">Type</th>
                            <th className="bsadd">Title</th>
                            <th className="mob">Category</th>
                            <th className="vilage">Created</th>
                            <th className="vilage">Status</th>
                            <th className="more">Images<br/>
                                Submitted</th>
                            <th className="vilage"></th>
                        </tr>
                    </thead>

                    <tr id="outerrequest" >
                        <td data-title="Request">36</td>
                        <td data-title="Type">location</td>
                        <td data-title="Title" style={{textAlign: "left"}}>Springwood Arndale</td>
                        <td data-title="Category">Buildings</td>
                        <td data-title="Created">12 Jun 2015</td>
                        <td data-title="Status">active</td>
                        <td data-title="Images Submitted">0</td>
                        <td data-title="Action"><a href="/"><i className="fa fa-pencil-square-o "></i></a><a title="view submitted images"><i className="fa fa-eye "></i></a></td>
                    </tr>
                    <tr id="Tr1">
                        <td data-title="Request">35</td>
                        <td data-title="Type">category</td>
                        <td data-title="Title" style={{textAlign: "left"}}>Child on Bike</td>
                        <td data-title="Category">People</td>
                        <td data-title="Created">12 Jun 2015</td>
                        <td data-title="Status">active</td>
                        <td data-title="Images Submitted">0</td>
                        <td data-title="Action"><a href="/" title="edit photo request"><i className="fa fa-pencil-square-o "></i></a><a title="view submitted images"><i className="fa fa-eye "></i></a></td>
                    </tr>
                    <tr id="Tr2">
                        <td data-title="Request">34</td>
                        <td data-title="Type">location</td>
                        <td data-title="Title" style={{textAlign: "left"}}>Children Care Center that is On Denise Road next to Lifestyl</td>
                        <td data-title="Category">Buildings</td>
                        <td data-title="Created">11 Jun 2015</td>
                        <td data-title="Status">active</td>
                        <td data-title="Images Submitted">0</td>
                        <td data-title="Action"><a href="/"><i className="fa fa-pencil-square-o "></i></a><a title="view submitted images"><i className="fa fa-eye "></i></a></td>
                    </tr>
                    <tr id="Tr3">
                        <td data-title="Request">33</td>
                        <td data-title="Type">location</td>
                        <td data-title="Title" style={{textAlign: "left"}}>Kentucky Fried Chuicken</td>
                        <td data-title="Category">Buildings</td>
                        <td data-title="Created">11 Jun 2015</td>
                        <td data-title="Status">active</td>
                        <td data-title="Images Submitted">0</td>
                        <td data-title="Action"><a href="/" title="edit photo request"><i className="fa fa-pencil-square-o "></i></a><a title="view submitted images"><i className="fa fa-eye "></i></a></td>
                    </tr>
                    <tr id="Tr4">
                        <td data-title="Request">32</td>
                        <td data-title="Type">location</td>
                        <td data-title="Title" style={{textAlign: "left"}}>Gym Weights</td>
                        <td data-title="Category">Buildings</td>
                        <td data-title="Created">11 Jun 2015</td>
                        <td data-title="Status">active</td>
                        <td data-title="Images Submitted">0</td>
                        <td data-title="Action"><a href="/" title="edit photo request"><i className="fa fa-pencil-square-o "></i></a><a title="view submitted images"><i className="fa fa-eye "></i></a></td>
                    </tr>
                    <tr id="Tr5">
                        <td data-title="Request">26</td>
                        <td data-title="Type">location</td>
                        <td data-title="Title" style={{textAlign: "left"}}>Springwood Towers</td>
                        <td data-title="Category">Buildings</td>
                        <td data-title="Created">11 Jun 2015</td>
                        <td data-title="Status">active</td>
                        <td data-title="">0</td>
                        <td data-title="Action"><a href="/" title="edit photo request"><i className="fa fa-pencil-square-o "></i></a><a title="view submitted images"><i className="fa fa-eye "></i></a></td>
                    </tr>
                    <tr id="Tr6">
                        <td data-title="Request">21</td>
                        <td data-title="Type">location</td>
                        <td data-title="Title" style={{textAlign: "left"}}>Daisy Hill State Forest Picknic Grounds</td>
                        <td data-title="Category">Nature</td>
                        <td data-title="Created">09 Jun 2015</td>
                        <td data-title="Status">active</td>
                        <td data-title="Images Submitted">0</td>
                        <td data-title="Action"><a href="/" title="edit photo request"><i className="fa fa-pencil-square-o "></i></a><a title="view submitted images"><i className="fa fa-eye "></i></a></td>
                    </tr>
                    <tr id="Tr7">
                        <td data-title="Request">20</td>
                        <td data-title="Type">location</td>
                        <td data-title="Title" style={{textAlign: "left"}}>Dairy Cows</td>
                        <td data-title="Category">Animals</td>
                        <td data-title="Created">06 Jun 2015</td>
                        <td data-title="Status">active</td>
                        <td data-title="Images Submitted">0</td>
                        <td data-title="Action"><a href="/" title="edit photo request"><i className="fa fa-pencil-square-o "></i></a><a title="view submitted images"><i className="fa fa-eye "></i></a></td>
                    </tr>
                    <tr id="Tr8">
                        <td data-title="Request">19</td>
                        <td data-title="Type">category</td>
                        <td data-title="Title" style={{textAlign: "left"}}>Coffe Cup</td>
                        <td data-title="Category">Buildings</td>
                        <td data-title="Created">30 May 2015</td>
                        <td data-title="Status">active</td>
                        <td data-title="Images Submitted">0</td>
                        <td data-title="Action"><a href="/" title="edit photo request"><i className="fa fa-pencil-square-o "></i></a><a title="view submitted images"><i className="fa fa-eye "></i></a></td>
                    </tr>
                    <tr id="Tr9">
                        <td data-title="Request">18</td>
                        <td data-title="Type">location</td>
                        <td data-title="Title" style={{textAlign: "left"}}>Farm House</td>
                        <td data-title="Category">People</td>
                        <td data-title="Created">30 May 2015</td>
                        <td data-title="Status">active</td>
                        <td data-title="Images Submitted">0</td>
                        <td data-title="Action"><a href="/" title="edit photo request"><i className="fa fa-pencil-square-o "></i></a><a title="view submitted images"><i className="fa fa-eye "></i></a></td>
                    </tr>

                </table>
                <div class="table-footer">
                    <div class="pagination-block">
                        <a class="first"><i class="fa fa-step-backward"></i></a>
                        <a class="prev"><i class="fa fa-caret-left"></i></a>
                        <div class="pagno">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                        </div>
                        <a class="next"><i class="fa fa-caret-right "></i></a>
                        <a class="last"><i class="fa fa-step-forward"></i></a>
                    </div>
                    <div class="pull-right">
                        <a href="NewrRquest.html" class="newbtn"><i class="fa fa-plus"></i>New Request</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default DataTable
