import { Button, Form, Input } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import React, { Component, FormEvent } from 'react'
import '../css/registry-form.css'

class RegistryForm extends Component<FormComponentProps> {
  public render(): React.ReactNode {
    const { getFieldDecorator } = this.props.form

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Name is required' }],
          })(
            <Input />,
          )}
        </Form.Item>
        <Form.Item label="Address">
          {getFieldDecorator('address', {
            rules: [{ required: true, message: 'Address is required' }],
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
        fetch('/registries', {
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        }).then((response) => response.json())
          .then((json) => console.log(json))
          .catch((err) => console.error(err))
      }
    })
  }
}

export default Form.create<FormComponentProps>()(RegistryForm)
