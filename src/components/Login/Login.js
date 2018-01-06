import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './less/Login.less';

const FormItem = Form.Item;

class Login extends React.Component {

  static propTypes = {
    form: PropTypes.shape({                                  // 自定义对象
      validateFields: PropTypes.func.isRequired,
      getFieldDecorator: PropTypes.func.isRequired,
    }),
  }

  static defaultProps = {
    form: {},
  }

  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {

  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { props: { dispatch } } = this;
        dispatch({ type: 'login/tests', payload: values });
      } else {
        return false;
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
            )}
          <a className="login-form-forgot">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button" >
            Log in
              </Button>
          Or <a>register now!</a>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(Login);
