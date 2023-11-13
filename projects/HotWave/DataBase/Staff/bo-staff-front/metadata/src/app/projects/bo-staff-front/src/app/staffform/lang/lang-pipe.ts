
import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';
export function createTranslateLoader(http: HttpClient,version:string) {
  let versionSuffix = "";
  if (version) {
    versionSuffix = "?v=" + version;
  }
  return new TranslateHttpLoader(http, '/apps/hotwave/database/web/bo-staff-front/staffform/i18n/', '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"TextBox/merchant_91fbe3b1_6p9z/placeHolder":"","root-component":"","root-layout":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","title":"员工表单","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-save":"保存","button-cancel":"取消","button-delete":"删除","main-container":"","content-splitter":"","content-list":"","data-grid-component-ref":"","content-main":"","detail-component-ref":"","data-grid-component":"","data-grid-section":"","Section/data-grid-section/mainTitle":"","Section/data-grid-section/subTitle":"","dataGrid":"","DataGrid/dataGrid/lineNumberTitle":"","DataGrid/dataGrid/OperateEditButton":"编辑","DataGrid/dataGrid/OperateDeleteButton":"删除","DataGrid/dataGrid/OperateColumn":"操作","name_77b424b2_isk2":"名称","code_95ef2878_ewnw":"编号","merchant_91fbe3b1_be3q":"商户","detail-form-component":"","detail-form-section":"","Section/detail-form-section/mainTitle":"基本信息","Section/detail-form-section/subTitle":"","detail-form-layout":"","name_77b424b2_jp3d":"名称","TextBox/name_77b424b2_jp3d/placeHolder":"","code_95ef2878_w1gd":"编号","TextBox/code_95ef2878_w1gd/placeHolder":"","merchant_91fbe3b1_6p9z":"商户","LookupEdit/merchant_91fbe3b1_6p9z/placeHolder":"","LookupEdit/merchant_91fbe3b1_6p9z/dialogTitle":"","telephone_TelephoneNumber_fdb78443_na4c":"电话号码","TextBox/telephone_TelephoneNumber_fdb78443_na4c/placeHolder":"","mailbox_Email_58c17137_hc82":"邮箱","TextBox/mailbox_Email_58c17137_hc82/placeHolder":"","idNumber_02e51691_6ivb":"身份证号","TextBox/idNumber_02e51691_6ivb/placeHolder":"","orCorPor_1917e65b_04lg":"是否法人/负责人"}};

@Pipe({ name: 'lang' })
export class LangPipe implements PipeTransform {
  constructor(private translate: TranslateService, private http: HttpClient) { }
  transform(key: string, langCode: string, defaultValue?: string) {
      
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }
}
@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    if (!url) {
      url = "";
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Injectable()
export class LangService {
  constructor(private translate: TranslateService) { }
  transform(key: string, langCode: string, defaultValue?: string) {
    
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }

}

@Injectable()
export class TranslateResolveService implements Resolve<any>{

  constructor(private translate: TranslateService, private http: HttpClient) {
    translate.defaultLang = 'zh-CHS';
    translate.setTranslation('zh-CHS', lang['zh-CHS']);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let langCode = localStorage.getItem('languageCode');
    if (!langCode) {
      langCode = "zh-CHS";
    }
    if (langCode == "zh-CHS" || (this.translate.defaultLang === langCode && this.translate.currentLoader == createTranslateLoader(this.http,null))) {
      this.translate.setTranslation('zh-CHS', lang['zh-CHS']);
      return of(this.translate[langCode]);
    } else {
      const httpOb = this.http.get("/apps/hotwave/database/web/bo-staff-front/version.json?v=" + new Date().getTime()).pipe(switchMap((data)=>{
        let currentVersion = null;
        if (data instanceof Array) {
          const versionKey = "staffform/" + langCode + ".json";
          data.forEach((item) => {
            if (item.category == "i18n" && item.key == versionKey) {
              currentVersion = item.value;
            }
          });
        }

        this.translate.defaultLang = langCode;
        this.translate.currentLang = langCode;
        this.translate.currentLoader = createTranslateLoader(this.http, currentVersion);

    let tran = this.translate.getTranslation(langCode).pipe(catchError(err => {
      console.error("read resource file failed,please check!!! "+ err);
      return of(err);
    }));
    return tran;
      }));
      return httpOb;
    }
  }
}
