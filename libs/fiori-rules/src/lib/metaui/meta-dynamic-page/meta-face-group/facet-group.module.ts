/**
 * @licensess
 * Copyright F. Kolara
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
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MetaUIRulesModule} from '@ngx-metaui/rules';
import {FacetModule} from '@fundamental-ngx/core';
import {MetaFacetGroupComponent} from './facet-group.component';

@NgModule({
  declarations: [
    MetaFacetGroupComponent
  ],
  imports: [
    CommonModule,
    FacetModule,
    MetaUIRulesModule
  ]
})
export class MetaFacetGroupModule {
}

