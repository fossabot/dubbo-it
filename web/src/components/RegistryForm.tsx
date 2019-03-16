import { Button, Form, Input } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import React, { Component } from 'react'
import '../css/registry-form.css'

class RegistryForm extends Component<FormComponentProps> {
  public render(): React.ReactNode {
    const { getFieldDecorator } = this.props.form

    return (
      <Form>
        <Form.Item label="Host">
          {getFieldDecorator('Host', {
            rules: [{ required: true, message: 'Host is required' }],
          })(
            <Input />,
          )}
        </Form.Item>
        <Form.Item label="Port">
          {getFieldDecorator('Port', {
            rules: [
              {
                message: 'Invalid port',
                pattern: /^()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$/,
              },
              { message: 'Port is required', required: true },
            ],
          })(
            <Input />,
          )}
        </Form.Item>
        <Form.Item label="Username">
          <Input />
        </Form.Item>
        <Form.Item label="Password">
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="registry-form-submit">Submit</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create<FormComponentProps>()(RegistryForm)
