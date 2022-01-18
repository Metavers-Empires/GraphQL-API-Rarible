import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Token as TokenContract
} from "../generated/Token/Token"

import {
  Token, User
} from "../generated/schema"

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let token = Token.load(event.params.tokenId.toString());
}