'use client';
import { MouseEventHandler } from 'react';

export function Button(props: { onClick: MouseEventHandler; children?: any; text:string, enabled?: boolean }) {

  return (
    <button disabled={typeof(props.enabled) === 'undefined' ? false : props.enabled} onClick={props.onClick}>
      {props.text}
      {props.children}
     
    </button>
  );
}
