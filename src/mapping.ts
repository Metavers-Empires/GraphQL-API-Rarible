import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Token as TokenContract
} from "../generated/Token/Token"

import {
  Token, User
} from "../generated/schema"

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let token = Token.load(event.params.previousOwner.toString());
  if(!token) {
    token = new Token(event.params.previousOwner.toHexString());
    token.creator = event.params.newOwner.toHexString();
    token.name = event.params.name.toString();
  }
}