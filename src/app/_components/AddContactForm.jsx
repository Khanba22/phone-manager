'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function AddContactForm({ onAdd, onCancel }) {
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    contactNo: '',
  })

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(newContact)
  }

  return (
    <Card className="mb-4">
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={newContact.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={newContact.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="contactNo"
            placeholder="Phone Number"
            value={newContact.contactNo}
            onChange={handleChange}
            required
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit">Add Contact</Button>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

