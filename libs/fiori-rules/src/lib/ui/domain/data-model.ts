/**
 *
 * @license
 * F. Kolar
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 *
 */
import {Value} from '@ngx-metaui/rules';

/**
 * Interface SelectItem is used to deal with complex object in order to be able to format
 * custom label that is shown in the options.
 */
export interface SelectItem {
  /**
   * Item text shown in the popup
   */
  label: string;

  /**
   * References to the object instance
   */
  value: any;
  disabled?: boolean;

  /**
   * Trigger values is a text for selected item
   */
  triggerValue?: string;
}

export function isSelectItem(item: SelectItem): item is SelectItem {
  return item && item.label !== undefined && item.value !== undefined;
}


export class Money implements Value {

  constructor(public readonly amount: number = 0, public  currency: string = 'USD',
              public readonly locale: string = 'en_US') {
  }


  getTypes(): any {
    return {
      amount: Number,
      currency: String,
      locale: String
    };
  }

  className(): string {
    return 'Money';
  }


  toString(): string {
    return this.amount + ', locale: ' + this.locale + ', code:  ' + this.currency;
  }


  clone(data: { amount?: number, currency?: string, locale?: string } = {}): Money {
    return new Money(
      (data.amount) ? data.amount : this.amount,
      (data.currency) ? data.currency : this.currency,
      (data.locale) ? data.locale : this.locale
    );
  }

}
