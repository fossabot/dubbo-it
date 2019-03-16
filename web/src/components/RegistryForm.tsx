import { Button, Form, Input } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import React, { Component, FormEvent } from 'react'
import '../css/registry-form.css'

class RegistryForm extends Component<FormComponentProps> {
  public render(): React.ReactNode {
    const { getFieldDecorator } = this.props.form

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Host">
          {getFieldDecorator('host', {
            rules: [{ required: true, message: 'Host is required' }],
          })(
            <Input />,
          )}
        </Form.Item>
        <Form.Item label="Port">
          {getFieldDecorator('port', {
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

  private handleSubmit = (e: FormEvent<any>) => {
    e.preventDefault()

    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log(values)
      }
    })
  }
}

export default Form.create<FormComponentProps>()(RegistryForm)
