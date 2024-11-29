'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import EditContactForm from './EditContactForm'

export default function ContactCard({ contact, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = (updatedContact) => {
    onEdit(updatedContact)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <EditContactForm
        contact={contact}
        onEdit={handleEdit}
        onCancel={() => setIsEditing(false)}
      />
    )
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-2">{contact.name}</h2>
        <p className="text-gray-600">Email: {contact.email}</p>
        <p className="text-gray-600">Phone: {contact.contactNo}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setIsEditing(true)}>
          Edit
        </Button>
        <Button variant="destructive" onClick={() => onDelete(contact._id)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}

