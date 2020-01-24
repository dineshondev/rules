/**
 * @license
 * Copyright 2017 SAP Ariba
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
 */
import {TestBed} from '@angular/core/testing';
import {Entity} from '../utils/domain-model';
import {MetaUIRulesModule} from '../../rules.module';
import {KeyLabel, META_RULES, MetaRules} from '../meta-rules';
import {Property} from './property';

// @formatter:off
/* tslint:disable */
// temp rules to push some default that are now separated from the rule engine
export const UILibRules = ' /**  * @license  * Copyright 2017 SAP Ariba  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License.  *  * Based on original work: MetaUI: Craig Federighi (2008)  *  */  field {     type  {        component:StringField;         bindings:{           value:$value;           id: ${properties.get("field")};           placeholder:${properties.get("label")};         };     }      type=(boolean, Boolean) {         editable {             component:Checkbox;             bindings:{               ngModel: $value;               required:${properties.get("required")};               disabled:false;               label:${properties.get("label")};               valueLabel:"Yes/No";               labelPosition:${properties.get("labelPosition")};             };         }          editable=false {            bindings:{               value: ${value ? "Yes" : "No"};            };         }     }      type=(Number) {         editable {           component:InputField;           canSetType:true;           bindings:{              ngModel: $value;              readonly:false;              required:${properties.get("required")};           };         }         operation=search { bindings:{formatter:$formatters.blankNull.integer;}; }     }      type=Date   {         editable {           component:DatePicker;             bindings:{               ngModel:$value;               readonly:false;               disabled:false;               id: ${properties.get("field")};               inputDisabled: false;               editable:true;           };         }          editable=false {             component:DatePicker;               bindings:{                 value:$value;                 readonly:true;                 disabled:false;                 id: ${properties.get("field")};                 inputDisabled: true;                 editable:false;             };          }         fiveZoneLayout = true {}     }      type=(Array, Set) {         editable {            trait:asSelect;            bindings:{               multiple:true;            };         }     }      type=String {         editable  {             component:InputField;             bindings:{                ngModel: $value;                id: ${properties.get("field")};                placeholder:${properties.get("label")};                required:${properties.get("required")};                readonly: ${ properties.get("editing") && !properties.get("editable") };             };         }         @trait=longtext {             after:zBottom;             component:TextArea;             bindings:{               required:${properties.get("required")};               readonly: ${ properties.get("editing") && !properties.get("editable") };               autoSizeEnabled:true;               minRows: 4;             };              operation=(search, list)  { visible:false; }         }          @trait=secret {             bindings:{formatter:$formatters.hiddenPassword;};             editable   { component:AWPasswordField; bindings:{formatter:null;}; }             operation=(search, list) { visible: false; }         }         trait=truncated { component:TruncateString; bindings:{size:10;}; }     }      type="Money" {         component: CurrencyComponent;         bindings:{             money:$value;             currencies:${properties.get("currencies")};         };     }      @trait=derived {         editable:false;         hideUnderline:true;         noLabelLayout:true;         editing { after:zNone; }     }      @trait=searchable {         operation=search {             visible:true; editable:true!; after:null!;         }     }      @trait=required {         operation=(edit, create) {             required:true;             object {                 valid: ${( value == null || value.length  == 0) ? "Required field": true};             }         }     }      @trait=fluid {         fluid:true;     }      @trait=asSelect {         editable {             component:Select;             bindings:{                 ngModel:$value;                 required:${properties.get("required")};                 displayKey:${ meta.displayLabel(type, properties.get("labelField"), true )};                 list:${properties.get("choices")};             };         }     }      @trait=asRadio {           editable {               component:RadioGroup;               bindings:{                   ngModel:$value;                   required:${properties.get("required")};                   label:${properties.get("label")};                   displayKey:${ meta.displayLabel(type, properties.get("labelField"), true )};                   list:${properties.get("choices")};               };           }      }      @trait=asAutoComplete {          editable {              component:AutoComplete;              bindings:{                  ngModel:$value;                  required:${properties.get("required")};                  displayKey:${ meta.displayLabel(type, properties.get("labelField"), true )};                  list:${properties.get("choices")};              };          }     }       @layout=Content {         component:MetaObjectDetailComponent;         bindings: {             object:$value;             layout:Inspect;         };     }      @trait=noCreate { operation=create { visible:false; } }     @trait=noSearch { operation=search { visible:false; } }      component=GenericChooserComponent {         @trait=Popup        { bindings:{type:Dropdown; }; }         @trait=PopupControl { bindings:{type:PopupControl; }; }         @trait=Chooser      { bindings:{type:Chooser; }; }     }      component=(StringField,AWHyperlink,PopupMenuLink) {         @trait=bold {             wrapperComponent:GenericContainerComponent;             wrapperBindings: { tagName:b; };         }         @trait=italic {             wrapperComponent:GenericContainerComponent;             wrapperBindings: { tagName:i; };         }         @trait=heading1 {             wrapperComponent:GenericContainerComponent;             wrapperBindings: { tagName:h1; };         }         @trait=heading2 {             wrapperComponent:GenericContainerComponent;             wrapperBindings: { tagName:h2; };         }         @trait=heading3 {             wrapperComponent:GenericContainerComponent;             wrapperBindings: { tagName:h3; };         }     }      floatingLabel:auto; }   layout {     @trait=ActionButtons {         visible:true;         component:MetaActionListComponent;         bindings:{             renderAs:buttons;             align:right;             defaultStyle:primary;          };          elementClass:"l-action-buttons";     }      @trait=ActionLinks {         visible:true;         component:MetaActionListComponent;         bindings:{             renderAs:links;             align:none;          };          elementClass:"l-action-buttons";     }      @trait=ActionLinksAligned {         visible:true;         component:MetaActionListComponent;         bindings:{             renderAs:links;             align:right;          };          elementClass:"l-action-buttons";     }      @trait=ActionMenu {         visible:true;         component:MetaActionListComponent;         bindings:{             renderAs:menu;             align:right;          };          elementClass:"l-action-buttons";     }      @trait=InstanceActionButtons {         visible:true;         component:MetaActionListComponent;         bindings:{             renderAs:buttons;             align:right;             filterActions:instance;          };          elementClass:"l-action-buttons";     }      @trait=StaticActionButtons {         visible:true;         component:MetaActionListComponent;         bindings:{             renderAs:buttons;             align:right;             filterActions:static;          };          elementClass:"l-action-buttons";     }      @trait=Tabs { visible:true; component:MetaTabs;}      @trait=Sections { visible:true; component:MetaSectionsComponent; }      @trait=Form { visible:true; component:MetaForm; }      @trait=Stack { visible:true; component:MetaElementListComponent; }      component=MetaForm @trait=floatingLabels;      layout_trait=labelsOnTop class {         bindings:{showFloatingLabels:true; };     } }  ~class layout=(Inspect, SearchForm) {component:StringComponent; bindings:{value:null; }; }   layout=ListItem class {     component:StringComponent;     bindings:{         value:${properties.get("objectTitle")};     }; }  module {     visible:$${!properties.get("hidden")};     homePage:MetaHomePageComponent;     pageBindings:${properties.get("homePage") == "MetaHomePageComponent" ? new Map().set("module", values.get("module")) : null};     component:MetaDashboardLayoutComponent;     layout { visible:true; }      @trait=ActionTOC {         @layout=Actions {            label:"Actions";            component:"MetaActionListComponent";            after:zToc;         }     } } ';

// @formatter:on
/* tslint:disable */

describe('Use of decorators to extend oss ', () => {


  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        MetaUIRulesModule.forRoot({'env.test': true})
      ]
    });

    TestBed.compileComponents();
    const metaUI: MetaRules = TestBed.get(META_RULES);

    metaUI.loadUILibSystemRuleFiles({}, UILibRules, {});

    window.setTimeout(function () {
      done();
    }, 0);
  });

  describe('With Properties decorators', () => {

// @formatter:off
    it('should set correct label for annotated field to equal to xName', () => {

        const metaUI: MetaRules = TestBed.get(META_RULES);
        metaUI.addTestUserRule('MyUserTestClassRule', MyUserTestClassRule);

        const myUserTestClass = new MyUserTestClass('Frank');

        const context = metaUI.newContext();
        context.push(); // 1

        context.set('layout', 'Inspect');
        context.set('operation', 'edit');
        context.set('object', myUserTestClass);

        context.push(); // 2
        context.setScopeKey('class');

        context.push(); // 3

        context.set('field', 'firstName');
        expect(context.propertyForKey(KeyLabel)).toEqual('xName');
        context.pop(); // 3


        context.pop(); // 2
        context.pop(); // 1
      }
    );

    it('should override firstName label to Name if we use label decorator', () => {

        debugger;
        const metaUI: MetaRules = TestBed.get(META_RULES);
        metaUI.addTestUserRule('MyUserTestClassRule', MyUserTestClassRule);

        const context = metaUI.newContext();
        context.push(); // 1

        context.set('object', new MyUserTestClass('F'));
        context.set('field', 'firstName');
        expect(context.propertyForKey(KeyLabel)).toEqual('xName');

        context.pop(); // 1
      }
    );
  });

// @formatter:on
});


class MyUserTestClass implements Entity {


  constructor(
    @Property.Label('xName')
    public firstName: string
  ) {
  }

  identity(): string {
    return this.firstName;
  }

  className(): string {
    return 'MyUserTestClass';
  }

  getTypes(): any {
    return {
      firstName: String
    };
  }
}

// @formatter:off
/* tslint:disable */
export const MyUserTestClassRule = '' +
  'class=MyUserTestClass {' +
  ' field=firstName {' +
  '  }' +
  '}';





