'use client';
import { MouseEventHandler } from 'react';

export function Button(props: { onClick: MouseEventHandler; children?: any; text:string }) {
  return (
    <button onClick={props.onClick}>
      {props.text}
      {props.children}
    </button>
  );
}
