
import React, { Component } from 'react'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button
} from "reactstrap";

class TableList extends Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Last classrooms </CardTitle>
                </CardHeader>
                <CardBody>
                <Table responsive>
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Name</th>
                                <th>Link</th>
                                
                                <th className="text-right">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td>Andrew Mike</td>
                                <td>Develop</td>                           
                                <td className="text-right">
                                    <Button className="btn-icon" color="danger" size="sm">
                                        <i className="fa fa-times" />
                                    </Button>
                                </td>
                            </tr>
                        
                        
                        </tbody>
                    </Table>
                </CardBody>
              </Card>
            </Col>
         
          </Row>
        </div>
      </>
    );
  }
}

export default TableList;