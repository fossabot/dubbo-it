import { Form, Input } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import React, { Component } from 'react'

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
            rules: [{ required: true, message: 'Port is required' }],
          })(
            <Input />,
          )}
        </Form.Item>
        <Form.Item label="Username">
          <Input />
        </Form.Item>
        <Form.Item label="Password">
          <Input />
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create<FormComponentProps>()(RegistryForm)
