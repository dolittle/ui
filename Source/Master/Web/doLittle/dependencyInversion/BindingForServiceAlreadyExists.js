/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Exception} from "doLittle/exceptions/Exception";

/**
 * The exception that gets thrown when there already is a binding for the given service
 */
export class BindingForServiceAlreadyExists extends Exception
{
    /**
     * Initializes an instance of {BindingForServiceAlreadyExists}
     */
    constructor(service) {
        super(`Binding for service ´${service}´ already exists`);
        this.service = service;
    }
}
