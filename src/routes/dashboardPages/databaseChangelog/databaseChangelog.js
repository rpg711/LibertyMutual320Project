import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Popover from 'react-bootstrap/lib/Popover';
import Modal, { Footer, Header, Title, Body } from 'react-bootstrap/lib/Modal';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';

class DatabaseChangelog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alertVisibleA: true,
      alertVisibleB: true,
      alertVisibleC: true,
      alertVisibleD: true,
      showModal: false,
    };
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  handleAlertDismiss(option) {
    switch (option) {
      case 'A':
        this.setState({ alertVisibleA: false });
        break;
      case 'B':
        this.setState({ alertVisibleB: false });
        break;
      case 'C':
        this.setState({ alertVisibleC: false });
        break;
      case 'D':
        this.setState({ alertVisibleD: false });
        break;
      default: this.setState({
        alertVisibleA: false,
        alertVisibleB: false,
        alertVisibleC: false,
        alertVisibleD: false,
      });
    }
  }

  render() {
    return (
      <div>

        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Changelog</PageHeader>
          </div>
        </div>

        <div className="col-lg-12">
          <Panel header={<span></span>} >
            <div>
              <div className="dataTable_wrapper">
                <div
                  id="dataTables-example_wrapper"
                  className="dataTables_wrapper form-inline dt-bootstrap no-footer"
                >

                  <div className="row">
                    <div className="col-sm-9">
                      <div className="dataTables_length" id="dataTables-example_length">
                        <label htmlFor={'show'}> Show
                          <select
                            name="dataTables-example_length"
                            aria-controls="dataTables-example"
                            className="form-control input-sm"
                            id="show"
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>
                          entries
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        className="table table-striped table-bordered table-hover dataTable no-footer"
                        id="dataTables-example"
                        role="grid"
                        aria-describedby="dataTables-example_info"
                      >
                        <thead>
                          <tr role="row">
                            <th
                              className="sorting_asc"
                              tabIndex="0"
                              aria-controls="dataTables-example"
                              rowSpan="1"
                              colSpan="1"
                              aria-label="Rendering engine: activate to sort column descending"
                              aria-sort="ascending"
                              style={{ width: 265 }}
                            >
                            ID
                            </th>
                            <th
                              className="sorting"
                              tabIndex="0"
                              aria-controls="dataTables-example"
                              rowSpan="1"
                              colSpan="1"
                              aria-label="Browser: activate to sort column ascending"
                              style={{ width: 321 }}
                            >
                            User
                            </th>
                            <th
                              className="sorting"
                              tabIndex="0"
                              aria-controls="dataTables-example"
                              rowSpan="1"
                              colSpan="1"
                              aria-label="Platform(s): activate to sort column ascending"
                              style={{ width: 299 }}
                            >
                            Changes
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="gradeA odd" role="row">
                            <td className="sorting_1">n</td>
                            <td>Matt Damon</td>
                            <td>Blah blah blah</td>
                          </tr>
                          <tr className="gradeA even" role="row">
                            <td className="sorting_1">n</td>
                            <td>Matt Damon</td>
                            <td>Blah blah blah</td>

                          </tr>
                          <tr className="gradeA odd" role="row">
                            <td className="sorting_1">n</td>
                            <td>Matt Damon</td>
                            <td>Blah blah blah</td>

                          </tr>
                          <tr className="gradeA even" role="row">
                            <td className="sorting_1">n</td>
                            <td>Matt Damon</td>
                            <td>Blah blah blah</td>

                          </tr>
                          <tr className="gradeA odd" role="row">
                            <td className="sorting_1">n</td>
                            <td>Matt Damon</td>
                            <td>Blah blah blah</td>

                          </tr>
                          <tr className="gradeA even" role="row">
                            <td className="sorting_1">n</td>
                            <td>Matt Damon</td>
                            <td>Blah blah blah</td>

                          </tr>
                          <tr className="gradeA odd" role="row">
                            <td className="sorting_1">n</td>
                            <td>Matt Damon</td>
                            <td>Blah blah blah</td>

                          </tr>
                          <tr className="gradeA even" role="row">
                            <td className="sorting_1">n</td>
                            <td>Matt Damon</td>
                            <td>Blah blah blah</td>

                          </tr>
                          <tr className="gradeA odd" role="row">
                            <td className="sorting_1">n</td>
                            <td>Matt Damon</td>
                            <td>Blah blah blah</td>

                          </tr>
                          <tr className="gradeA even" role="row">
                            <td className="sorting_1">n</td>
                            <td>Matt Damon</td>
                            <td>Blah blah blah</td>

                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div
                        className="dataTables_info"
                        id="dataTables-example_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 10 of 57 entries
                      </div>
                    </div>
                    <div className="col-sm-6 pullRight " >
                      <Pagination
                        activePage={1}
                        items={6}
                        first
                        last
                        prev
                        next
                        onSelect={() => {
                          // function for Pagination
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        </div>
      </div>

    );
  }
}

export default DatabaseChangelog;
