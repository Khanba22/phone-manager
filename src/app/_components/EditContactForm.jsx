'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function EditContactForm({ contact, onEdit, onCancel }) {
  const [editedContact, setEditedContact] = useState(contact)

  const handleChange = (e) => {
    setEditedContact({ ...editedContact, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onEdit(editedContact)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={editedContact.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={editedContact.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="contactNo"
            placeholder="Phone Number"
            value={editedContact.contactNo}
            onChange={handleChange}
            required
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit">Save Changes</Button>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

