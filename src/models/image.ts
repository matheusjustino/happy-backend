import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './orphanage';

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    public path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id' })
    orphanage: Orphanage;
}