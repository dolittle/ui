/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Action} from "doLittle/actions/Action";

const _bindingContextManager = new WeakMap();
const _element = new WeakMap();

/**
 * Represents an {Action} that creates a new binding context from the element given and associates
 * it to the element
 */
export class CreateBindingContextAction extends Action
{
    constructor(bindingContextManager, element) {
        super();
        _bindingContextManager.set(this, bindingContextManager);
        _element.set(this, element);
    }

    /** @inheritdoc */
    perform() {

    }
}