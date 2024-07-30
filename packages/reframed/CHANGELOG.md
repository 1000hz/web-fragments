# reframed

## 0.0.11

### Patch Changes

- 9511b7b: Another attempt at fixing DOM insertion method patching.

  Our previous assumptions in [#42](https://github.com/web-fragments/web-fragments/pull/42) turned out to be wrong. We do indeed need to patch the main execution context's insertion methods. We now patch them to check if the node the insertion method is being called on is within a reframed container, and if so execute any potential script elements within the associated reframed context. Note that loading `reframed` is now side-effectful.

## 0.0.10

### Patch Changes

- 8d7d522: Fixed DOM insertion patching issue. We were accidentally patching the main context's prototypes instead of the reframed context prototypes.

## 0.0.9

### Patch Changes

- 45df910: fix: patch the iframe's document `readyState` (and also dispatch `readystatechange` event)
- af60115: fix: patch iframe's window `IntersectionObserver`
- 05f3fc0: patch main window history to dispatch popstate events for reframed iframes to trigger UI updates. These patches are reverted when the iframe is destroyed
- af0e8b2: DOM insertion methods now result in inserted scripts being executed in the reframed context.

## 0.0.8

### Patch Changes

- 469a67f: Fix global event listeners added by monkeyPatchIframeDocument() not being cleaned up on iframe removal

## 0.0.7

### Patch Changes

- de47957: Update `writable-dom` to fix empty inline script tag issue

  See https://github.com/web-fragments/writable-dom/commit/d8c96af41e71448ace4c8387391bc678dce143bd

## 0.0.6

### Patch Changes

- 1ca6280: fix: use iframe document instead of main document as scriptLoadingDocument in writable-dom

  this changeset is relative to the changes introduced in https://github.com/web-fragments/web-fragments/pull/16/commits/2c490e2f5ba3c3ed5dd46d36d748f02bd1fa7878 (https://github.com/web-fragments/web-fragments/pull/16)
