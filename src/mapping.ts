import {
  Create721RaribleProxy as Create721RaribleProxyEvent,
  Create721RaribleUserProxy as Create721RaribleUserProxyEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Token/Token"
import {
  Create721RaribleProxy,
  Create721RaribleUserProxy,
  OwnershipTransferred
} from "../generated/schema"

export function handleCreate721RaribleProxy(
  event: Create721RaribleProxyEvent
): void {
  let entity = new Create721RaribleProxy(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.proxy = event.params.proxy
  entity.save()
}

export function handleCreate721RaribleUserProxy(
  event: Create721RaribleUserProxyEvent
): void {
  let entity = new Create721RaribleUserProxy(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.proxy = event.params.proxy
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
