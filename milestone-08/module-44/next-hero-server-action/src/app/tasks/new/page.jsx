"use client"
import { newTaskAction } from "@/lib/action";
import {
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  Button,
  Form,
  FieldError
} from "@heroui/react";
import React from "react";

const NewTask = () => {
  return (
    <div className="w-1/2 mx-auto">
      <h3 className="text-5xl">add a new task</h3>

      <div>
        <Form action={newTaskAction} className="flex flex-col gap-4">
          <TextField 
           isRequired
           minLength = {8}
           validate={(value) => {
            if(value.length < 8){
                return "Title must be at least 8 characters or longer"
            }
           }}
          className="w-full" name="title" type="text">
            <Label>Title</Label>
            <Input placeholder="Enter your title" />
            <FieldError />
          </TextField>

          <Select
            name="priority"
            className="w-[256px]"
            placeholder="Select one"
          >
            <Label>Priority</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="high" textValue="High">
                  High
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="critical" textValue="Critical">
                  Critical
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="medium" textValue="Medium">
                  Medium
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="low" textValue="Low">
                  Low
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <Select name="status" className="w-[256px]" placeholder="Select one">
            <Label>Status</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="in-progress" textValue="In-progress">
                  In-progress
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="completed" textValue="Completed">
                  Completed
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="pending" textValue="Pending">
                  Pending
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <TextField className="w-full" name="assignedTo">
            <Label>Assigned To</Label>
            <Input placeholder="Task Assigned To" />
          </TextField>
          <TextField className="w-full" name="description">
            <Label>Description</Label>
            <Input placeholder="Enter your description" />
          </TextField>

          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button slot="close" type="submit">
            Submit Message
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewTask;
