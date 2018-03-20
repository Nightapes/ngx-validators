import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Util } from './../util';
import { PhoneNumberUtil } from 'google-libphonenumber';
import * as libPhoneNumber from 'google-libphonenumber';

export const regionsCode: any = {
    // Region code for global networks (e.g. +800 numbers).
    UN001: '001',
    AD:'AD',
    AE:'AE',
    AF:'AF',
    AG:'AG',
    AI:'AI',
    AL:'AL',
    AM:'AM',
    AN:'AN',
    AO:'AO',
    AQ:'AQ',
    AR:'AR',
    AS:'AS',
    AT:'AT',
    AU:'AU',
    AW:'AW',
    AX:'AX',
    AZ:'AZ',
    BA:'BA',
    BB:'BB',
    BD:'BD',
    BE:'BE',
    BF:'BF',
    BG:'BG',
    BH:'BH',
    BI:'BI',
    BJ:'BJ',
    BL:'BL',
    BM:'BM',
    BN:'BN',
    BO:'BO',
    BR:'BR',
    BS:'BS',
    BT:'BT',
    BV:'BV',
    BW:'BW',
    BY:'BY',
    BZ:'BZ',
    CA:'CA',
    CC:'CC',
    CD:'CD',
    CF:'CF',
    CG:'CG',
    CH:'CH',
    CI:'CI',
    CK:'CK',
    CL:'CL',
    CM:'CM',
    CN:'CN',
    CO:'CO',
    CR:'CR',
    CU:'CU',
    CV:'CV',
    CX:'CX',
    CY:'CY',
    CZ:'CZ',
    DE:'DE',
    DJ:'DJ',
    DK:'DK',
    DM:'DM',
    DO:'DO',
    DZ:'DZ',
    EC:'EC',
    EE:'EE',
    EG:'EG',
    EH:'EH',
    ER:'ER',
    ES:'ES',
    ET:'ET',
    FI:'FI',
    FJ:'FJ',
    FK:'FK',
    FM:'FM',
    FO:'FO',
    FR:'FR',
    GA:'GA',
    GB:'GB',
    GD:'GD',
    GE:'GE',
    GF:'GF',
    GG:'GG',
    GH:'GH',
    GI:'GI',
    GL:'GL',
    GM:'GM',
    GN:'GN',
    GP:'GP',
    GQ:'GQ',
    GR:'GR',
    GS:'GS',
    GT:'GT',
    GU:'GU',
    GW:'GW',
    GY:'GY',
    HK:'HK',
    HM:'HM',
    HN:'HN',
    HR:'HR',
    HT:'HT',
    HU:'HU',
    ID:'ID',
    IE:'IE',
    IL:'IL',
    IM:'IM',
    IN:'IN',
    IO:'IO',
    IQ:'IQ',
    IR:'IR',
    IS:'IS',
    IT:'IT',
    JE:'JE',
    JM:'JM',
    JO:'JO',
    JP:'JP',
    KE:'KE',
    KG:'KG',
    KH:'KH',
    KI:'KI',
    KM:'KM',
    KN:'KN',
    KP:'KP',
    KR:'KR',
    KW:'KW',
    KY:'KY',
    KZ:'KZ',
    LA:'LA',
    LB:'LB',
    LC:'LC',
    LI:'LI',
    LK:'LK',
    LR:'LR',
    LS:'LS',
    LT:'LT',
    LU:'LU',
    LV:'LV',
    LY:'LY',
    MA:'MA',
    MC:'MC',
    MD:'MD',
    ME:'ME',
    MF:'MF',
    MG:'MG',
    MH:'MH',
    MK:'MK',
    ML:'ML',
    MM:'MM',
    MN:'MN',
    MO:'MO',
    MP:'MP',
    MQ:'MQ',
    MR:'MR',
    MS:'MS',
    MT:'MT',
    MU:'MU',
    MV:'MV',
    MW:'MW',
    MX:'MX',
    MY:'MY',
    MZ:'MZ',
    NA:'NA',
    NC:'NC',
    NE:'NE',
    NF:'NF',
    NG:'NG',
    NI:'NI',
    NL:'NL',
    NO:'NO',
    NP:'NP',
    NR:'NR',
    NU:'NU',
    NZ:'NZ',
    OM:'OM',
    PA:'PA',
    PE:'PE',
    PF:'PF',
    PG:'PG',
    PH:'PH',
    PK:'PK',
    PL:'PL',
    PM:'PM',
    PN:'PN',
    PR:'PR',
    PS:'PS',
    PT:'PT',
    PW:'PW',
    PY:'PY',
    QA:'QA',
    RE:'RE',
    RO:'RO',
    RS:'RS',
    RU:'RU',
    RW:'RW',
    SA:'SA',
    SB:'SB',
    SC:'SC',
    SD:'SD',
    SE:'SE',
    SG:'SG',
    SH:'SH',
    SI:'SI',
    SJ:'SJ',
    SK:'SK',
    SL:'SL',
    SM:'SM',
    SN:'SN',
    SO:'SO',
    SR:'SR',
    ST:'ST',
    SV:'SV',
    SY:'SY',
    SZ:'SZ',
    TC:'TC',
    TD:'TD',
    TF:'TF',
    TG:'TG',
    TH:'TH',
    TJ:'TJ',
    TK:'TK',
    TL:'TL',
    TM:'TM',
    TN:'TN',
    TO:'TO',
    TR:'TR',
    TT:'TT',
    TV:'TV',
    TW:'TW',
    TZ:'TZ',
    UA:'UA',
    UG:'UG',
    UM:'UM',
    US:'US',
    UY:'UY',
    UZ:'UZ',
    VA:'VA',
    VC:'VC',
    VE:'VE',
    VG:'VG',
    VI:'VI',
    VN:'VN',
    VU:'VU',
    WF:'WF',
    WS:'WS',
    YE:'YE',
    YT:'YT',
    ZA:'ZA',
    ZM:'ZM',
    ZW:'ZW',
    // Official code for the unknown region.
    ZZ: 'ZZ'
};
export class PhoneValidators {

    static checkRegionCode(local: string): boolean {
        return !(regionsCode[local] === undefined);
    };

    static isValidRegionCode(control: AbstractControl): { [key: string]: boolean } {
        if (Util.isNotPresent(control)) {
            return undefined;
        }

        if (!PhoneValidators.checkRegionCode(control.value)) {
            return { 'noValidRegionCode': true };
        }
        return undefined;
    };

    public static isPhoneNumber(local: string): ValidatorFn {
        const validator = (control: AbstractControl): { [key: string]: any } => {
            if (Util.isNotPresent(control)) {
                return undefined;
            }

            if (!PhoneValidators.checkRegionCode(local)) {
                return { 'noValidRegionCode': true };
            }

            let phoneParser: PhoneNumberUtil = PhoneNumberUtil.getInstance();

            let error = { 'noPhoneNumber': true };
            try {
                let phoneNumber: libPhoneNumber.PhoneNumber = phoneParser.parse(control.value, local);
                if (phoneParser.isValidNumber(phoneNumber)) {
                    error = undefined;
                }
            } catch (err) {
                error = { 'noPhoneNumber': true };
            }

            return error;
        };
        return validator;
    };

    public static isPossibleNumberWithReason(local: string): ValidatorFn {
        const validator = (control: AbstractControl): { [key: string]: any } => {
            if (Util.isNotPresent(control)) {
                return undefined;
            }

            if (!PhoneValidators.checkRegionCode(local)) {
                return { 'noValidRegionCode': true };
            }

            let phoneParser: PhoneNumberUtil = PhoneNumberUtil.getInstance();

            let error: any = { 'noPhoneNumber': true };
            try {
                let phoneNumber: libPhoneNumber.PhoneNumber = phoneParser.parse(control.value, local);
                let reason: PhoneNumberUtil.ValidationResult = phoneParser.isPossibleNumberWithReason(phoneNumber);
                switch (reason) {
                    case PhoneNumberUtil.ValidationResult.IS_POSSIBLE:
                        error = undefined;
                        break;
                    case PhoneNumberUtil.ValidationResult.TOO_LONG:
                        error = { 'phoneNumberTooLong': true };
                        break;
                    case PhoneNumberUtil.ValidationResult.TOO_SHORT:
                        error = { 'phoneNumberTooShort': true };
                        break;
                    case PhoneNumberUtil.ValidationResult.INVALID_COUNTRY_CODE:
                        error = { 'phoneNumberInvalidCountryCode': true };
                        break;
                    default:
                        error = { 'noPhoneNumber': true };
                        break;
                }
            } catch (err) {
                error = { 'noPhoneNumber': true };
            }

            return error;

        };
        return validator;
    };
}